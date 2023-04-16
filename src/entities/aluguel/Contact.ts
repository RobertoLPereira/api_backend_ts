import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("contact_pkey", ["id"], { unique: true })
@Entity("contact", { schema: "aluguel" })
export class Contact {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", nullable: true, length: 255 })
  nome: string | null;

  @Column("character varying", {
    name: "telefone",
    nullable: true,
    length: 255,
  })
  telefone: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("character varying", {
    name: "url_avatar",
    nullable: true,
    length: 255,
  })
  urlAvatar: string | null;

  @Column("boolean", { name: "proprietario", nullable: true })
  proprietario: boolean | null;

  @Column("timestamp with time zone", { name: "cadastradoem", nullable: true })
  cadastradoem: Date | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;
}
