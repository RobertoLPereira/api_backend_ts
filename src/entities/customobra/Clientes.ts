import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Amortizacaodecapital } from "./Amortizacaodecapital";

@Index("clientes_pk", ["empresa"], { unique: true })
@Entity("clientes", { schema: "customobra" })
export class Clientes {
  @PrimaryGeneratedColumn({ type: "integer", name: "empresa" })
  empresa: number;

  @Column("character varying", {
    name: "nomedaempresa",
    nullable: true,
    length: 50,
  })
  nomedaempresa: string | null;

  @Column("character varying", {
    name: "primeironomedocontato",
    nullable: true,
    length: 30,
  })
  primeironomedocontato: string | null;

  @Column("character varying", {
    name: "sobrenomedocontato",
    nullable: true,
    length: 50,
  })
  sobrenomedocontato: string | null;

  @Column("character varying", {
    name: "empresaoudepartamento",
    nullable: true,
    length: 50,
  })
  empresaoudepartamento: string | null;

  @Column("character varying", {
    name: "enderecodecobranca",
    nullable: true,
    length: 255,
  })
  enderecodecobranca: string | null;

  @Column("character varying", { name: "cidade", nullable: true, length: 50 })
  cidade: string | null;

  @Column("character varying", {
    name: "estadoouprovincia",
    nullable: true,
    length: 20,
  })
  estadoouprovincia: string | null;

  @Column("character varying", { name: "cep", nullable: true, length: 20 })
  cep: string | null;

  @Column("character varying", { name: "pais", nullable: true, length: 50 })
  pais: string | null;

  @Column("character varying", {
    name: "titulodocontato",
    nullable: true,
    length: 50,
  })
  titulodocontato: string | null;

  @Column("character varying", {
    name: "ndotelefone",
    nullable: true,
    length: 30,
  })
  ndotelefone: string | null;

  @Column("character varying", { name: "ramal", nullable: true, length: 30 })
  ramal: string | null;

  @Column("character varying", { name: "fax", nullable: true, length: 30 })
  fax: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("text", { name: "observacoes", nullable: true })
  observacoes: string | null;

  @OneToMany(
    () => Amortizacaodecapital,
    (amortizacaodecapital) => amortizacaodecapital.empresa2
  )
  amortizacaodecapitals: Amortizacaodecapital[];
}
