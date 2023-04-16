import { Column, Entity, Index } from "typeorm";

@Index("gruposalarios_pkey", ["idgrupoSalarios"], { unique: true })
@Entity("gruposalarios", { schema: "apoio" })
export class Gruposalarios {
  @Column("integer", { primary: true, name: "idgrupoSalarios" })
  idgrupoSalarios: number;

  @Column("character varying", { name: "grupoSalario", length: 45 })
  grupoSalario: string;
}
