# find record from username
def select_all_records_by_username(cursor, username):
    sql = "SELECT * FROM tb_user WHERE username=?"
    cursor.execute(sql, [username])
    # print(cursor.fetchall())  # or use fetchone()
    # print("\nHere is a listing of the rows in the table\n")
    for row in cursor.execute("SELECT rowid, * FROM tb_user ORDER BY username"):
        return row

