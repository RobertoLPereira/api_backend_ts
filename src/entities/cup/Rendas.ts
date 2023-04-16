import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("rendas_pkey", ["idrenda"], { unique: true })
@Entity("rendas", { schema: "cup" })
export class Rendas {
  @PrimaryGeneratedColumn({ type: "integer", name: "idrenda" })
  idrenda: number;

  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("integer", { name: "idtiporenda", default: () => "0" })
  idtiporenda: number;

  @Column("integer", { name: "idtipomoeda", nullable: true })
  idtipomoeda: number | null;

  @Column("double precision", {
    name: "valor",
    precision: 53,
    default: () => "0.00",
  })
  valor: number;

  @Column("date", { name: "valorizadaem", nullable: true })
  valorizadaem: string | null;

  @Column("integer", { name: "idempregador", nullable: true })
  idempregador: number | null;

  @Column("integer", { name: "idsituacao", nullable: true })
  idsituacao: number | null;
}
