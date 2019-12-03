package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.entity.Comment;

import java.util.List;

public interface CommentService {
    Comment saveComment(Comment comment);
    Comment getCommentById(String id);
    List<Comment> getCommentsByProductId(String productId);
    List<Comment> getAllComments();
    void removeComment(String id);
}
