import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("view_customaodeobras_pkey", ["id"], { unique: true })
@Entity("view_customaodeobras", { schema: "aluguel" })
export class ViewCustomaodeobras {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "empresa", nullable: true })
  empresa: number | null;

  @Column("double precision", {
    name: "somasubtotal",
    nullable: true,
    precision: 53,
  })
  somasubtotal: number | null;

  @Column("double precision", { name: "hsmes", nullable: true, precision: 53 })
  hsmes: number | null;

  @Column("double precision", {
    name: "comencargos",
    nullable: true,
    precision: 53,
  })
  comencargos: number | null;

  @Column("double precision", {
    name: "despmensal",
    nullable: true,
    precision: 53,
  })
  despmensal: number | null;

  @Column("double precision", { name: "amort", nullable: true, precision: 53 })
  amort: number | null;

  @Column("double precision", { name: "imob", nullable: true, precision: 53 })
  imob: number | null;

  @Column("double precision", { name: "deprec", nullable: true, precision: 53 })
  deprec: number | null;

  @Column("double precision", { name: "iss", nullable: true, precision: 53 })
  iss: number | null;

  @Column("double precision", { name: "lucr", nullable: true, precision: 53 })
  lucr: number | null;

  @Column("double precision", { name: "custo1", nullable: true, precision: 53 })
  custo1: number | null;

  @Column("double precision", { name: "custo2", nullable: true, precision: 53 })
  custo2: number | null;

  @Column("double precision", { name: "custo3", nullable: true, precision: 53 })
  custo3: number | null;

  @Column("double precision", { name: "custo4", nullable: true, precision: 53 })
  custo4: number | null;

  @Column("double precision", {
    name: "chsinicial",
    nullable: true,
    precision: 53,
  })
  chsinicial: number | null;

  @Column("double precision", {
    name: "chssemlucro",
    nullable: true,
    precision: 53,
  })
  chssemlucro: number | null;

  @Column("double precision", {
    name: "maodeobracomlucro",
    nullable: true,
    precision: 53,
  })
  maodeobracomlucro: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
