import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contrato } from "./Contrato";
import { Imovel } from "./Imovel";
import { Pessoas } from "./Pessoas";
import { Leituraaguaunidade } from "./Leituraaguaunidade";
import { Leituraluzunidade } from "./Leituraluzunidade";
import { Pagamentos } from "./Pagamentos";

@Index("imovelunidade_pkey", ["idunidade"], { unique: true })
@Entity("imovelunidade", { schema: "aluguel" })
export class Imovelunidade {
  @PrimaryGeneratedColumn({ type: "integer", name: "idunidade" })
  idunidade: number;

  @Column("character varying", { name: "descricao", length: 30 })
  descricao: string;

  @Column("integer", { name: "status", nullable: true, default: () => "1" })
  status: number | null;

  @Column("numeric", {
    name: "valordaunidade",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "50000",
  })
  valordaunidade: string | null;

  @Column("integer", { name: "idcategoriadeimoveis", nullable: true })
  idcategoriadeimoveis: number | null;

  @OneToMany(() => Contrato, (contrato) => contrato.idunidade)
  contratoes: Contrato[];

  @ManyToOne(() => Imovel, (imovel) => imovel.imovelunidades)
  @JoinColumn([{ name: "idimovel", referencedColumnName: "idimovel" }])
  idimovel: Imovel;

  @ManyToOne(() => Pessoas, (pessoas) => pessoas.imovelunidades)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa: Pessoas;

  @OneToMany(
    () => Leituraaguaunidade,
    (leituraaguaunidade) => leituraaguaunidade.idunidade
  )
  leituraaguaunidades: Leituraaguaunidade[];

  @OneToMany(
    () => Leituraluzunidade,
    (leituraluzunidade) => leituraluzunidade.idunidade
  )
  leituraluzunidades: Leituraluzunidade[];

  @OneToMany(() => Pagamentos, (pagamentos) => pagamentos.idunidade)
  pagamentos: Pagamentos[];
}
