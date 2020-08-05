package tech.talci.ecommercespringboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.talci.ecommercespringboot.domain.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {
}
