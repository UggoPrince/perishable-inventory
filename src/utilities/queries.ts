export const tableExistQuery = `SELECT 1 FROM information_schema.tables WHERE table_name = 'items'`;

export const createDbFuncQuery = `CREATE OR REPLACE FUNCTION delete_old_rows() RETURNS trigger LANGUAGE plpgsql
AS $$
BEGIN
DELETE FROM items WHERE expiry < CURRENT_TIMESTAMP - INTERVAL '1 minute';
RETURN NULL;
END;
$$;`;

export const triggerExistQuery = `SELECT 1 FROM pg_trigger WHERE tgname = 'trigger_delete_old_rows'`;

export const createTriggerQuery = `CREATE TRIGGER trigger_delete_old_rows AFTER INSERT ON items EXECUTE PROCEDURE delete_old_rows();`;
