package com.bsuir.belitsky.cafe.repository;

import com.bsuir.belitsky.cafe.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, String> {
    Comment getCommentById(String id);
    List<Comment> getCommentsByProductId(String productId);
}
