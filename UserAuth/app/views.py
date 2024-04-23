from django.shortcuts import render
from rest_framework.views import APIView
from .models import UserAuthModel
from .serializer import UserAuthModelSerializer
from rest_framework.response import Response
import datetime
import jwt
# Create your views here.


class UserAuthView(APIView):
    def post(self,request):
        serializer = UserAuthModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = UserAuthModel.objects.get(email=request.data['email'])
            payload = {
                'id': data.id,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
                'iat': datetime.datetime.utcnow()
            }
            token = jwt.encode(payload, 'secret', algorithm='HS256')
            response = Response()
            response.set_cookie(key='jwt', value=token, httponly=True)
            response.data = {
                'jwt': str(token),
                'msg':'login',
            }
            return response
        else:
            return Response({'msg':'Please fill all the Fields'})

class UserAuthLogin(APIView):
    def post(self,request):
        print('login executed -----------------------------------------')
        email = request.data['email']
        password = request.data['password']
        print(email , password)
        try:
            data = UserAuthModel.objects.get(email=email)
        except:
            print('not login *********************')
            return Response({'msg':'email_invalid'})
        else:
            if data.password == password:
                payload = {
                        'id':data.id,
                        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
                        'iat': datetime.datetime.utcnow()
                }
                token = jwt.encode(payload,'secret',algorithm='HS256')
                response = Response()
                response.set_cookie(key='jwt',value=token,httponly=True)
                print('cookies set //////////////////////////////////////////////')
                print('token',token)
                response.data = {
                    'jwt':str(token),
                    'msg':'login'
                }
                return response
            else:
                return Response({'msg':'password_incorrect'})
