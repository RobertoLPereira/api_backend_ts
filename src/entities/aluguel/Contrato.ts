import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoas } from "./Pessoas";
import { Imovelunidade } from "./Imovelunidade";
import { Pagamentos } from "./Pagamentos";
import { Taxaadministracao } from "./Taxaadministracao";

@Index("contrato_pkey", ["idcontrato"], { unique: true })
@Entity("contrato", { schema: "aluguel" })
export class Contrato {
  @PrimaryGeneratedColumn({ type: "integer", name: "idcontrato" })
  idcontrato: number;

  @Column("integer", {
    name: "diavencimento",
    nullable: true,
    default: () => "10",
  })
  diavencimento: number | null;

  @Column("timestamp with time zone", { name: "datacontrato", nullable: true })
  datacontrato: Date | null;

  @Column("integer", { name: "status", nullable: true, default: () => "1" })
  status: number | null;

  @Column("timestamp with time zone", {
    name: "validadecontrato",
    nullable: true,
  })
  validadecontrato: Date | null;

  @Column("double precision", {
    name: "valor",
    nullable: true,
    precision: 53,
    default: () => "'0'",
  })
  valor: number | null;

  @Column("double precision", {
    name: "taxacondominio",
    nullable: true,
    precision: 53,
    default: () => "'0'",
  })
  taxacondominio: number | null;

  @Column("double precision", {
    name: "valordecaucao",
    nullable: true,
    precision: 53,
    default: () => "'0'",
  })
  valordecaucao: number | null;

  @ManyToOne(() => Pessoas, (pessoas) => pessoas.contratoes)
  @JoinColumn([{ name: "idlocador", referencedColumnName: "idpessoa" }])
  idlocador: Pessoas;

  @ManyToOne(() => Pessoas, (pessoas) => pessoas.contratoes2)
  @JoinColumn([{ name: "idlocatario", referencedColumnName: "idpessoa" }])
  idlocatario: Pessoas;

  @ManyToOne(() => Imovelunidade, (imovelunidade) => imovelunidade.contratoes)
  @JoinColumn([{ name: "idunidade", referencedColumnName: "idunidade" }])
  idunidade: Imovelunidade;

  @OneToMany(() => Pagamentos, (pagamentos) => pagamentos.idcontrato)
  pagamentos: Pagamentos[];

  @OneToMany(
    () => Taxaadministracao,
    (taxaadministracao) => taxaadministracao.idcontrato
  )
  taxaadministracaos: Taxaadministracao[];
}
