import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
  } from "typeorm";
  import { Credenciaisperfil } from "./credenciaisperfil";
  import { Ordemservicoperfil } from "./ordemservicoperfil";
  import { Sistema } from "./sistema";
  import { Perfil } from "./perfil";
  
  @Index("fki_fk_perfil", ["idperfil"], {})
  @Index("perfilsistema_pkey", ["idperfilsistema"], { unique: true })
  @Index("fki_fk_perfilsis", ["idsistema"], {})
  @Entity("perfilsistema", { schema: "seguranca" })
  export class Perfilsistema {
	@PrimaryGeneratedColumn({ type: "integer", name: "idperfilsistema" })
	idperfilsistema: number;
  
	@Column("integer", { name: "idperfil", default: () => "0" })
	idperfil: number;
  
	@Column("integer", { name: "idsistema", default: () => "0" })
	idsistema: number;
  
	@OneToMany(
	  () => Credenciaisperfil,
	  (credenciaisperfil) => credenciaisperfil.idperfilsistema
	)
	credenciaisperfils: Credenciaisperfil[];
  
	@OneToMany(
	  () => Ordemservicoperfil,
	  (ordemservicoperfil) => ordemservicoperfil.idperfilsistema
	)
	ordemservicoperfils: Ordemservicoperfil[];
  
	@ManyToOne(() => Sistema, (sistema) => sistema.perfilsistemas)
	@JoinColumn([{ name: "idsistema", referencedColumnName: "idsistema" }])
	sistema: Sistema;
  
	@ManyToOne(() => Perfil, (perfil) => perfil.perfilsistemas)
	@JoinColumn([{ name: "idperfil", referencedColumnName: "idperfil" }])
	perfil: Perfil;
  }
  