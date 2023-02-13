<xsl:stylesheet version='1.0' xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match='/'>
            <html>
                <head>
                    <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                    crossorigin="anonymous"></link>
                </head>
                <body>

                    <table class='table table-danger'>
                        <tr>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                        <xsl:for-each select='menu/item'>

                            <tr>
                                <td>
                                    <xsl:value-of select="@category"/>
                                </td>
                                <td>
                                    <xsl:value-of select="food"/>
                                </td>
                                <td>
                                    <xsl:value-of select="price"/>
                                </td>
                                <td>
                                    <xsl:value-of select="rating"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>



                </body>
            </html>




    </xsl:template>
</xsl:stylesheet>