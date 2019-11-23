package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.entity.Comment;
import com.bsuir.belitsky.cafe.repository.CommentRepository;
import com.bsuir.belitsky.cafe.services.CommentService;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {

    private CommentRepository commentRepository;

    public CommentServiceImpl(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public Comment getCommentById(String id) {
        return commentRepository.getCommentById(id);
    }
}
