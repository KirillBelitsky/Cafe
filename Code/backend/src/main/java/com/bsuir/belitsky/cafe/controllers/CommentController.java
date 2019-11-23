package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.CommentDto;
import com.bsuir.belitsky.cafe.entity.Comment;
import com.bsuir.belitsky.cafe.services.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private CommentService commentService;
    private ModelMapper modelMapper;

    @Autowired
    public CommentController(CommentService commentService, ModelMapper modelMapper) {
        this.commentService = commentService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/{id}")
    public CommentDto getCommentById(@PathVariable("id") String id) {
        if(id != null) {
            Comment comment = commentService.getCommentById(id);
            return comment != null ? modelMapper.map(comment, CommentDto.class) : null;
        }
        return null;
    }

    @PostMapping
    public CommentDto saveComment(@RequestBody CommentDto commentDto) {
        if(commentDto != null) {
            Comment comment = commentService.saveComment(modelMapper.map(commentDto, Comment.class));
            return comment != null ? modelMapper.map(comment, CommentDto.class) : null;
        }
        return null;
    }
}
