package com.example.demo.post;

import com.example.demo.worker.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "posts")
@CrossOrigin("*")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getPosts(){
        return postService.getPosts();
    }

    @GetMapping("{id}")
    public Post getPost(@PathVariable String id){
        return postService.getPost(id);
    }

    @GetMapping("user/{id}")
    public List<Post> getAllPostsByUserId(@PathVariable String id){ return postService.getAllPostsByUserId(id); }

    @PostMapping
    public Post addPost(@RequestBody Form form){
        return postService.addPost(form.getPost(), form.getCategory_id(), form.getUser_id());
    }

    @DeleteMapping("{id}")
    public void deletePost(@PathVariable String id){
        postService.deletePost(id);
    }
}

class Form{
    private Post post;
    private Integer category_id;
    private Integer user_id;

    public Form(Post post, Integer category_id, Integer user_id) {
        this.post = post;
        this.category_id = category_id;
        this.user_id = user_id;
    }

    public Post getPost() {
        return post;
    }

    public Integer getCategory_id() {
        return category_id;
    }

    public Integer getUser_id() {
        return user_id;
    }
}
