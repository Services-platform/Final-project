package com.example.demo.post;

import com.example.demo.category.Category;
import com.example.demo.category.CategoryRepository;
import com.example.demo.user.User;
import com.example.demo.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    @Autowired
    public PostService(PostRepository postRepository, CategoryRepository categoryRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }

    public List<Post> getPosts() {
        return postRepository.findAll();
    }

    public Post getPost(String id) {
        Integer post_id = Integer.parseInt(id);
        return postRepository.findById(post_id).orElse(null);
    }

    public Post addPost(Post post, Integer category_id, Integer user_id) {
        Category category = categoryRepository.findById(category_id).orElse(null);
        User user = userRepository.findById(user_id).orElse(null);
        post.setCategory(category);
        post.setUser(user);
        return postRepository.save(post);
    }
}
