package utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author DUNGHUYNH
 */
public class DBUtils {
    private static final String DB_NAME = "Flood-Rescue-Coordination";
    private static final String USER = "sa";
    private static final String PASSWORD = "12345";
    
    public static Connection getConnection() throws SQLException, ClassNotFoundException {
        Connection conn = null;
        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        String url = "jdbc:sqlserver://localhost:1433;databaseName=" + DB_NAME;
        conn = DriverManager.getConnection(url, USER, PASSWORD);
        return conn;
    }
}
