package com.websystique.springboot.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="LOGIN")
public class Login implements Serializable{

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;

	@NotEmpty
	@Column(name="USERNAME", nullable=false)
	private String username;

	@Column(name="PASSWORD", nullable=false)
	private String password;

	@Column(name="ROLE", nullable=false)
	private Integer role;

	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getRole() {
		return role;
	}

	public void setRole(Integer role) {
		this.role = role;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		Login login = (Login) o;

		if (Double.compare(login.role, role) != 0) return false;
		if (id != null ? !id.equals(login.id) : login.id != null) return false;
		if (username != null ? !username.equals(login.username) : login.username != null) return false;
		return password != null ? password.equals(login.password) : login.password == null;
	}

	@Override
	public int hashCode() {
		int result;
		long temp;
		result = id != null ? id.hashCode() : 0;
		result = 31 * result + (username != null ? username.hashCode() : 0);
		result = 31 * result + (password != null ? password.hashCode() : 0);
		temp = Double.doubleToLongBits(role);
		result = 31 * result + (int) (temp ^ (temp >>> 32));
		return result;
	}

	@Override
	public String toString() {
		return "Login [id=" + id + ", name=" + username + ", age=" + password
				+ ", salary=" + role + "]";
	}


}
