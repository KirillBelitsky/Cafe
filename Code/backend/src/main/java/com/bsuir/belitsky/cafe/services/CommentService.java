package com.bsuir.belitsky.cafe.services;

import com.bsuir.belitsky.cafe.entity.Comment;

public interface CommentService {
    Comment saveComment(Comment comment);
    Comment getCommentById(String id);
}
