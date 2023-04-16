import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("empresa_pkey", ["id"], { unique: true })
@Index("empresa_nome_key", ["nome"], { unique: true })
@Entity("empresa", { schema: "pdvandroid" })
export class Empresa {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", unique: true, length: 50 })
  nome: string;

  @Column("character varying", { name: "cnpj", length: 14 })
  cnpj: string;

  @Column("character varying", { name: "ie", length: 12 })
  ie: string;

  @Column("character varying", {
    name: "logradouro",
    nullable: true,
    length: 100,
  })
  logradouro: string | null;

  @Column("character varying", { name: "numero", nullable: true, length: 30 })
  numero: string | null;

  @Column("character varying", { name: "bairro", nullable: true, length: 15 })
  bairro: string | null;

  @Column("character varying", { name: "cidade", nullable: true, length: 20 })
  cidade: string | null;

  @Column("character", { name: "uf", nullable: true, length: 2 })
  uf: string | null;

  @Column("character varying", { name: "ibge", nullable: true, length: 10 })
  ibge: string | null;

  @Column("character varying", { name: "cep", nullable: true, length: 10 })
  cep: string | null;

  @Column("integer", { name: "crt", nullable: true })
  crt: number | null;

  @Column("integer", { name: "forma_emissao", nullable: true })
  formaEmissao: number | null;

  @Column("character", { name: "serie", nullable: true, length: 3 })
  serie: string | null;

  @Column("integer", { name: "ultimo_doc", nullable: true })
  ultimoDoc: number | null;
}
