import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fki_pessoaTelefone", ["idpessoa"], {})
@Index("telefones_pkey", ["idtelefone"], { unique: true })
@Entity("telefones", { schema: "delivery" })
export class Telefones {
  @PrimaryGeneratedColumn({ type: "integer", name: "idtelefone" })
  idtelefone: number;

  @Column("integer", { name: "idpessoa", nullable: true })
  idpessoa: number | null;

  @Column("character varying", {
    name: "numero",
    nullable: true,
    length: 11,
    default: () => "NULL::character varying",
  })
  numero: string | null;

  @Column("integer", { name: "ddd", nullable: true })
  ddd: number | null;

  @Column("integer", { name: "pais", nullable: true, default: () => "55" })
  pais: number | null;

  @Column("integer", { name: "idprincipal", nullable: true })
  idprincipal: number | null;

  @Column("boolean", {
    name: "ccelular",
    nullable: true,
    default: () => "true",
  })
  ccelular: boolean | null;

  @Column("character varying", {
    name: "falarcom",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  falarcom: string | null;

  @Column("integer", { name: "ramal", nullable: true })
  ramal: number | null;
}
