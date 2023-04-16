import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("caracteristicaapartamento_pkey", ["idCaractApto"], { unique: true })
@Entity("caracteristicaapartamento", { schema: "apoio" })
export class Caracteristicaapartamento {
  @PrimaryGeneratedColumn({ type: "integer", name: "idCaractApto" })
  idCaractApto: number;

  @Column("character", {
    name: "descricao",
    nullable: true,
    length: 60,
    default: () => "NULL::bpchar",
  })
  descricao: string | null;

  @Column("integer", {
    name: "qtdDormitorios",
    nullable: true,
    default: () => "0",
  })
  qtdDormitorios: number | null;

  @Column("integer", { name: "nroSuites", nullable: true, default: () => "0" })
  nroSuites: number | null;

  @Column("integer", { name: "nroLavabos", nullable: true, default: () => "0" })
  nroLavabos: number | null;

  @Column("integer", {
    name: "nroDependencias",
    nullable: true,
    default: () => "0",
  })
  nroDependencias: number | null;

  @Column("integer", { name: "nroSalas", nullable: true, default: () => "0" })
  nroSalas: number | null;

  @Column("integer", { name: "nraSacadas", nullable: true, default: () => "0" })
  nraSacadas: number | null;

  @Column("integer", {
    name: "idcCobertura",
    nullable: true,
    default: () => "0",
  })
  idcCobertura: number | null;
}
