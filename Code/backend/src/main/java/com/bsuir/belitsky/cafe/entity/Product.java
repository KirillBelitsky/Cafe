package com.bsuir.belitsky.cafe.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "product", schema = "public")
@NoArgsConstructor
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator")
    private String id;
    private String name;
    private double price;
    private double mass;
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "menu_category_code", referencedColumnName = "code")
    private MenuCategory menuCategory;

    @Override
    public String toString() {
        return "Product{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", mass=" + mass +
                ", description='" + description + '\'' +
                ", menuCategory=" + menuCategory +
                '}';
    }
}
