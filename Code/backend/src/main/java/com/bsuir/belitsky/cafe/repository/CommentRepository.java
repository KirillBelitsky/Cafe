package com.bsuir.belitsky.cafe.repository;

import com.bsuir.belitsky.cafe.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, String> {
    Comment getCommentById(String id);
}
