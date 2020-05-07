Eventually Albums and Singles will need to refactored so there is an albums query on the backed which only gets full-length records, and a singles query which only gets 45's. There should also be a fullalbums query. There also needs to be fullAlbumsConnection, albumsconnection, and singlesconnection, in order to paginate properly.

Currently everything is grabbed from the backend and filtered on the frontend, which is totally non-performant.
