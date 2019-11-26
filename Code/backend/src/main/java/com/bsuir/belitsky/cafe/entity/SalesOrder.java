package com.bsuir.belitsky.cafe.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "sales_order", schema = "public")
@NoArgsConstructor
@Getter
@Setter
public class SalesOrder {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "salesorder_product",
            joinColumns = @JoinColumn(name = "salesorderid"),
            inverseJoinColumns = @JoinColumn(name = "productid"))
    private List<Product> products;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private User owner;

    @Override
    public String toString() {
        return "SalesOrder{" +
                "id='" + id + '\'' +
                ", products=" + products +
                ", owner=" + owner +
                '}';
    }
}
