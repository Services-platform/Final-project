package com.example.demo.user;

import com.example.demo.roles.Role;
import com.example.demo.roles.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUser(String id) {
        Integer user_id = Integer.parseInt(id);
        return userRepository.findById(user_id).orElse(null);
    }

    public User addUser(Form form) {
        User user = form.getUser();
        Integer role_id = form.getRole_id();
        Role role = roleRepository.findById(role_id).orElse(null);
        user.setRole(role);
        return userRepository.save(user);
    }

    public void updateUser(String id, User userData) {
        Integer User_id = Integer.parseInt(id);
        User user = userRepository.findById(User_id).orElse(null);
        if (user != null){
            user.setName(userData.getName());
            user.setEmail(userData.getEmail());
            user.setPhone(userData.getPhone());
            user.setPassword(userData.getPassword());
            userRepository.save(user);
        }
    }
}
