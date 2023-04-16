import { Column, Entity, Index } from "typeorm";

@Index("rescst_pkey", ["empresa", "icmsCst", "pisCst"], { unique: true })
@Entity("resumo_cst", { schema: "nfefacil" })
export class ResumoCst {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("character", { primary: true, name: "icms_cst", length: 3 })
  icmsCst: string;

  @Column("character", { primary: true, name: "pis_cst", length: 3 })
  pisCst: string;

  @Column("double precision", {
    name: "valor_com_st",
    nullable: true,
    precision: 53,
  })
  valorComSt: number | null;

  @Column("double precision", {
    name: "valor_sem_st",
    nullable: true,
    precision: 53,
  })
  valorSemSt: number | null;
}
