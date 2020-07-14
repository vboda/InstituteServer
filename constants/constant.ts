export const QUERIES = {
    FETCH_USER_ON_EMAIL : `select * from institute.User where email = ?`,
    UPDATE_USER: `update institute.User SET `,
    FETCH_COURSES: `select * from institute.courses`,
    FETCh_ROLES: 'select * from institute.roles',
    INSERT_USER: `insert into institute.user set `
}