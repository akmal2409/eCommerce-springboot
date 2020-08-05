package tech.talci.ecommercespringboot.services.jpa;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import tech.talci.ecommercespringboot.domain.ProductCategory;
import tech.talci.ecommercespringboot.repositories.ProductCategoryRepository;
import tech.talci.ecommercespringboot.services.ProductCategoryService;
import tech.talci.ecommercespringboot.services.ProductService;

import javax.transaction.Transactional;


@Service
@Profile("jpa")
@Transactional
public class ProductCategoryJpaService extends AbstractJpaService<ProductCategory, ProductCategoryRepository>
        implements ProductCategoryService {

    public ProductCategoryJpaService(ProductCategoryRepository repository) {
        super(repository);
    }
}
