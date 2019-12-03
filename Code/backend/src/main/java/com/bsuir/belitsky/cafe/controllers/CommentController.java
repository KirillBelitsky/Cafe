package com.bsuir.belitsky.cafe.controllers;

import com.bsuir.belitsky.cafe.dto.CommentDto;
import com.bsuir.belitsky.cafe.entity.Comment;
import com.bsuir.belitsky.cafe.services.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

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

    @GetMapping
    public List<CommentDto> getCommentsByProductId(@RequestParam(name = "productId") String productId) {
        return this.commentService.getCommentsByProductId(productId)
                .stream()
                .map(comment -> modelMapper.map(comment, CommentDto.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/all")
    public List<CommentDto> getAllComments() {
        return this.commentService.getAllComments()
                .stream()
                .map(comment -> modelMapper.map(comment, CommentDto.class))
                .collect(Collectors.toList());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteCommentById(@PathVariable("id") String id) {
        if(id != null) {
            commentService.removeComment(id);
            return ResponseEntity.noContent().build();
        }
        return null;
    }
}
