import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Empresa } from "./Empresa";

@Index("pk_pardigital", ["codigo"], { unique: true })
@Entity("pardigital", { schema: "nfefacil" })
export class Pardigital {
  @Column("integer", { primary: true, name: "codigo" })
  codigo: number;

  @Column("character varying", {
    name: "senha_truststore",
    nullable: true,
    length: 20,
  })
  senhaTruststore: string | null;

  @Column("character varying", {
    name: "senha_token",
    nullable: true,
    length: 20,
  })
  senhaToken: string | null;

  @Column("character varying", {
    name: "senha_keystore",
    nullable: true,
    length: 20,
  })
  senhaKeystore: string | null;

  @Column("character", { name: "serie55", nullable: true, length: 3 })
  serie55: string | null;

  @Column("character", { name: "serie65", nullable: true, length: 3 })
  serie65: string | null;

  @Column("character", { name: "verproc", nullable: true, length: 30 })
  verproc: string | null;

  @Column("character", { name: "idtoken", nullable: true, length: 6 })
  idtoken: string | null;

  @Column("character varying", { name: "csc", nullable: true, length: 40 })
  csc: string | null;

  @Column("character varying", { name: "csc_prod", nullable: true, length: 40 })
  cscProd: string | null;

  @ManyToOne(() => Empresa, (empresa) => empresa.pardigitals)
  @JoinColumn([{ name: "empresa", referencedColumnName: "codigo" }])
  empresa: Empresa;
}
