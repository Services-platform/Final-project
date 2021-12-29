package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "users")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("{id}")
    public User getUser(@PathVariable String id){
        return userService.getUser(id);
    }

    @PostMapping
    public User addUser(@RequestBody Form form){
        return userService.addUser(form);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable String id, @RequestBody Form userData){
        userService.updateUser(id, userData.getUser());
    }
}

class Form{
    private User user;
    private Integer role_id;

    public User getUser() {
        return user;
    }

    public Integer getRole_id() {
        return role_id;
    }
}
