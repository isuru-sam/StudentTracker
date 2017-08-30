CREATE TABLE student
(
    id bigint NOT NULL,
    name character varying(100) ,
    address character varying(200) ,
    is_full_time boolean,
    version integer,
    CONSTRAINT student_pkey PRIMARY KEY (id)
)