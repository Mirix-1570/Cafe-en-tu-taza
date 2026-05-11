from rest_framework import generics
from rest_framework.response import Response
from core.application.use_cases.post_use_cases import PostUseCases
from core.infrastructure.persistence.repositories.post_repository import DjangoPostRepository
from interfaces.serializers.post_serializer import PostSerializer
from core.application.dto.post_dto import PostDTO

repository = DjangoPostRepository()
use_cases = PostUseCases(repository)


class PostListCreateView(generics.GenericAPIView):
    serializer_class = PostSerializer

    def get(self, request):
        posts = use_cases.list_posts()
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        dto = PostDTO(**request.data)
        post = use_cases.create_post(dto)
        serializer = self.get_serializer(post)
        return Response(serializer.data, status=201)


class PostRetrieveUpdateDestroyView(generics.GenericAPIView):
    serializer_class = PostSerializer

    def get(self, request, pk):
        post = use_cases.get_post(pk)
        serializer = self.get_serializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
        dto = PostDTO(**request.data)
        post = use_cases.update_post(pk, dto)
        serializer = self.get_serializer(post)
        return Response(serializer.data)

    def delete(self, request, pk):
        use_cases.delete_post(pk)
        return Response(status=204)
