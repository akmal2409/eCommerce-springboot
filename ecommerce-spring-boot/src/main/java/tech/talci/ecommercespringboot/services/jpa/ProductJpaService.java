package tech.talci.ecommercespringboot.services.jpa;

import lombok.Setter;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import tech.talci.ecommercespringboot.domain.Product;
import tech.talci.ecommercespringboot.repositories.ProductRepository;
import tech.talci.ecommercespringboot.services.ProductService;

import javax.transaction.Transactional;

@Service
@Profile("jpa")
@Transactional
public class ProductJpaService extends AbstractJpaService<Product, ProductRepository> implements ProductService {

    public ProductJpaService(ProductRepository repository) {
        super(repository);
    }
}
