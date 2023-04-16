import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Ibge } from "./Ibge";

@Index("fornec_pkey", ["codigo"], { unique: true })
@Entity("fornecedor", { schema: "nfefacil" })
export class Fornecedor {
  @Column("integer", { primary: true, name: "codigo" })
  codigo: number;

  @Column("character varying", {
    name: "razaosocial",
    nullable: true,
    length: 60,
  })
  razaosocial: string | null;

  @Column("character varying", { name: "fantasia", nullable: true, length: 60 })
  fantasia: string | null;

  @Column("character varying", { name: "cnpj", nullable: true, length: 18 })
  cnpj: string | null;

  @Column("character varying", { name: "inscest", nullable: true, length: 20 })
  inscest: string | null;

  @Column("character varying", { name: "endereco", nullable: true, length: 45 })
  endereco: string | null;

  @Column("character varying", { name: "numero", nullable: true, length: 8 })
  numero: string | null;

  @Column("character varying", { name: "bairro", nullable: true, length: 25 })
  bairro: string | null;

  @Column("integer", { name: "cep", nullable: true })
  cep: number | null;

  @Column("character", { name: "uf", nullable: true, length: 2 })
  uf: string | null;

  @Column("character varying", { name: "telefone", nullable: true, length: 20 })
  telefone: string | null;

  @Column("character varying", { name: "contato", nullable: true, length: 20 })
  contato: string | null;

  @Column("character varying", {
    name: "ramalcontato",
    nullable: true,
    length: 15,
  })
  ramalcontato: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @ManyToOne(() => Ibge, (ibge) => ibge.fornecedors)
  @JoinColumn([{ name: "codcidade", referencedColumnName: "codigo" }])
  codcidade: Ibge;
}
