import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ordemservicousuarios_pkey", ["idordemservicousuario"], { unique: true })
@Entity("ordemservicousuarios", { schema: "seguranca" })
export class Ordemservicousuarios {
  @PrimaryGeneratedColumn({ type: "integer", name: "idordemservicousuario" })
  idordemservicousuario: number;

  @Column("integer", { name: "idordemservico", default: () => "0" })
  idordemservico: number;

  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("character", {
    name: "codigousuariorede",
    nullable: true,
    length: 30,
    default: () => "NULL::bpchar",
  })
  codigousuariorede: string | null;

  @Column("character", {
    name: "nome",
    nullable: true,
    length: 50,
    default: () => "NULL::bpchar",
  })
  nome: string | null;
}
