import { Column, Entity, Index, OneToMany } from "typeorm";
import { Cliente } from "./Cliente";
import { Empresa } from "./Empresa";
import { Fornecedor } from "./Fornecedor";

@Index("ibge_pkey", ["codigo"], { unique: true })
@Entity("ibge", { schema: "nfefacil" })
export class Ibge {
  @Column("integer", { primary: true, name: "codigo" })
  codigo: number;

  @Column("character varying", { name: "cidade", nullable: true, length: 40 })
  cidade: string | null;

  @Column("integer", { name: "codcidade", nullable: true })
  codcidade: number | null;

  @Column("character varying", { name: "distrito", nullable: true, length: 40 })
  distrito: string | null;

  @Column("character varying", { name: "uf", nullable: true, length: 2 })
  uf: string | null;

  @OneToMany(() => Cliente, (cliente) => cliente.codcidade)
  clientes: Cliente[];

  @OneToMany(() => Empresa, (empresa) => empresa.codcidade)
  empresas: Empresa[];

  @OneToMany(() => Fornecedor, (fornecedor) => fornecedor.codcidade)
  fornecedors: Fornecedor[];
}
