package com.example.demo.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List getCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategory(String id) {
        Integer category_id = Integer.parseInt(id);
        return categoryRepository.findById(category_id).orElse(null);
    }

    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    }

    public void updateCategory(String id, Category category) {
        Integer category_id = Integer.parseInt(id);
        Category category1 = categoryRepository.findById(category_id).orElse(null);
        if(category1 != null){
            category1.setCategory_name(category.getCategory_name());
            categoryRepository.save(category1);
        }
    }
}
