package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUser(String id) {
        Integer user_id = Integer.parseInt(id);
        return userRepository.findById(user_id).orElse(null);
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public void updateUser(String id, User userData) {
        Integer User_id = Integer.parseInt(id);
        User user = userRepository.findById(User_id).orElse(null);
        if (user != null){
            user.setUser_name(userData.getUser_name());
            user.setEmail(userData.getEmail());
            user.setPhone_number(userData.getPhone_number());
            user.setPassword(userData.getPassword());
            userRepository.save(user);
        }
    }
}
