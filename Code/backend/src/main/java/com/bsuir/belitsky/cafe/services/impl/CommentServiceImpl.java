package com.bsuir.belitsky.cafe.services.impl;

import com.bsuir.belitsky.cafe.entity.Comment;
import com.bsuir.belitsky.cafe.repository.CommentRepository;
import com.bsuir.belitsky.cafe.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    private CommentRepository commentRepository;

    @Autowired
    public CommentServiceImpl(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public Comment saveComment(Comment comment) {
        System.out.println(comment);
        return commentRepository.save(comment);
    }

    @Override
    public Comment getCommentById(String id) {
        return commentRepository.getCommentById(id);
    }

    @Override
    public List<Comment> getCommentsByProductId(String productId) {
        return this.commentRepository.getCommentsByProductId(productId);
    }

    @Override
    public List<Comment> getAllComments() {
        return this.commentRepository.findAll();
    }
}
