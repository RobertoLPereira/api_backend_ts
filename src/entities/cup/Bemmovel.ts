import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_imovelbem", ["bemIdbem"], {})
@Index("pk_bemmovel", ["idbemmovel"], { unique: true })
@Entity("bemmovel", { schema: "cup" })
export class Bemmovel {
  @Column("integer", { primary: true, name: "idbemmovel" })
  idbemmovel: number;

  @Column("integer", { name: "idtipobemmovel", nullable: true })
  idtipobemmovel: number | null;

  @Column("integer", { name: "idespecie", nullable: true })
  idespecie: number | null;

  @Column("integer", { name: "anofabricacao", nullable: true })
  anofabricacao: number | null;

  @Column("integer", { name: "idmarca", nullable: true })
  idmarca: number | null;

  @Column("character varying", {
    name: "nomemodelo",
    nullable: true,
    length: 20,
  })
  nomemodelo: string | null;

  @Column("integer", { name: "anomodelo", nullable: true })
  anomodelo: number | null;

  @Column("integer", { name: "idcor", nullable: true })
  idcor: number | null;

  @Column("integer", { name: "idcategoria", nullable: true })
  idcategoria: number | null;

  @Column("integer", { name: "capacidadepassageiros", nullable: true })
  capacidadepassageiros: number | null;

  @Column("character varying", { name: "potencia", nullable: true, length: 15 })
  potencia: string | null;

  @Column("character varying", {
    name: "cilindrada",
    nullable: true,
    length: 15,
  })
  cilindrada: string | null;

  @Column("text", { name: "observacao", nullable: true })
  observacao: string | null;

  @Column("character varying", {
    name: "numeroplacaanterior",
    nullable: true,
    length: 10,
  })
  numeroplacaanterior: string | null;

  @Column("character", {
    name: "siglaestadoplacaanterior",
    nullable: true,
    length: 2,
  })
  siglaestadoplacaanterior: string | null;

  @Column("character varying", {
    name: "numeroplacaatual",
    nullable: true,
    length: 10,
  })
  numeroplacaatual: string | null;

  @Column("character varying", {
    name: "numerochassi",
    nullable: true,
    length: 30,
  })
  numerochassi: string | null;

  @Column("character varying", {
    name: "numerorenavan",
    nullable: true,
    length: 10,
  })
  numerorenavan: string | null;

  @Column("character varying", {
    name: "numerorntrc",
    nullable: true,
    length: 20,
  })
  numerorntrc: string | null;

  @Column("integer", { name: "idcombustivel", nullable: true })
  idcombustivel: number | null;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @Column("date", {
    name: "dataatualizacao",
    nullable: true,
    default: () => "now()",
  })
  dataatualizacao: string | null;

  @Column("character varying", {
    name: "idusuario",
    nullable: true,
    length: 20,
  })
  idusuario: string | null;

  @Column("character varying", {
    name: "idestacao",
    nullable: true,
    length: 50,
  })
  idestacao: string | null;

  @Column("integer", { name: "bem_idbem", nullable: true })
  bemIdbem: number | null;

  @ManyToOne(() => Bem, (bem) => bem.bemmovels)
  @JoinColumn([{ name: "bem_idbem", referencedColumnName: "idbem" }])
  bemIdbem2: Bem;
}
