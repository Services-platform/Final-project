package com.example.demo.user;

import com.example.demo.roles.Role;
import com.example.demo.roles.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserService implements UserDetailsService {
    
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder; // we use the Encoder to Hash the password

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // we override this method from UserDetailsService interface
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if(user == null){
            throw new UsernameNotFoundException("User not found in the database");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        Role role = user.getRole();
        authorities.add(new SimpleGrantedAuthority(role.getName()));
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),authorities);
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
        // before we save the user we need to change the password (Encode password)
        user.setPassword(passwordEncoder.encode(user.getPassword()));
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
