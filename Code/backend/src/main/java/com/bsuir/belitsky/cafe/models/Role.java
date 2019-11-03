package com.bsuir.belitsky.cafe.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "role")
@NoArgsConstructor
@Getter
@Setter
public class Role {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator")
    private String id;
    private String role;

    @ManyToMany(mappedBy = "roles")
    private Set<User> users = new HashSet<>();

    @Override
    public String toString() {
        return "Role{" +
                "id='" + id + '\'' +
                ", role='" + role + '\'' +
                ", users=" + users +
                '}';
    }
}
