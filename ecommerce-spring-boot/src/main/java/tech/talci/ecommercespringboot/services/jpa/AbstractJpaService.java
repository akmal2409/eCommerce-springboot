package tech.talci.ecommercespringboot.services.jpa;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import tech.talci.ecommercespringboot.services.CrudService;

import java.util.List;


public abstract class AbstractJpaService<T, R extends JpaRepository<T, Long>> implements CrudService<T, Long> {

    protected R repository;

    public AbstractJpaService(R repository) {
        this.repository = repository;
    }

    @Override
    public List<T> findAll() {
        return repository.findAll();
    }

    @Override
    public T findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public T save(T object) {
        return repository.save(object);
    }

    @Override
    public void delete(T object) {
        repository.delete(object);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
