import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Ibge } from "./Ibge";
import { Numeronfe } from "./Numeronfe";
import { Pardigital } from "./Pardigital";

@Index("empresa_pkey", ["codigo"], { unique: true })
@Entity("empresa", { schema: "nfefacil" })
export class Empresa {
  @Column("integer", { primary: true, name: "codigo" })
  codigo: number;

  @Column("character varying", { name: "bairro", nullable: true, length: 30 })
  bairro: string | null;

  @Column("character varying", { name: "cep", nullable: true, length: 9 })
  cep: string | null;

  @Column("character varying", { name: "cnpj", nullable: true, length: 18 })
  cnpj: string | null;

  @Column("integer", { name: "codempresa" })
  codempresa: number;

  @Column("character varying", {
    name: "codigo_pais_nfe",
    nullable: true,
    length: 4,
  })
  codigoPaisNfe: string | null;

  @Column("character varying", {
    name: "complemento",
    nullable: true,
    length: 30,
  })
  complemento: string | null;

  @Column("character varying", { name: "contato", nullable: true, length: 30 })
  contato: string | null;

  @Column("character varying", { name: "endereco", nullable: true, length: 50 })
  endereco: string | null;

  @Column("character varying", { name: "fantasia", nullable: true, length: 50 })
  fantasia: string | null;

  @Column("character varying", { name: "telefone", nullable: true, length: 20 })
  telefone: string | null;

  @Column("character varying", { name: "inscest", nullable: true, length: 20 })
  inscest: string | null;

  @Column("character varying", { name: "numero", nullable: true, length: 10 })
  numero: string | null;

  @Column("character varying", { name: "razao", nullable: true, length: 50 })
  razao: string | null;

  @Column("character varying", { name: "tipo_nf", nullable: true, length: 1 })
  tipoNf: string | null;

  @Column("character", { name: "crt", nullable: true, length: 1 })
  crt: string | null;

  @Column("double precision", {
    name: "margem_lucro",
    nullable: true,
    precision: 53,
    default: () => "15.0",
  })
  margemLucro: number | null;

  @ManyToOne(() => Ibge, (ibge) => ibge.empresas)
  @JoinColumn([{ name: "codcidade", referencedColumnName: "codigo" }])
  codcidade: Ibge;

  @OneToMany(() => Numeronfe, (numeronfe) => numeronfe.empresa2)
  numeronfes: Numeronfe[];

  @OneToMany(() => Pardigital, (pardigital) => pardigital.empresa)
  pardigitals: Pardigital[];
}
