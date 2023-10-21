import dropbox
from dropbox.exceptions import AuthError

def upload_to_dropbox(file_path, file):
    dbx = dropbox.Dropbox('sl.BoX3SI1A8URs-xRyBinIm6Ze9OUlTbE6p8vN53oq7HLNez38b2YKkkDZlDYkZQuOjNZIXJpn1U3vu8m-D6h7XBrvnYvbIokcUDxxJtqvmKmhykavqsBNouwAHDmxQiCcSx5c18tGa3Dx')

    try:
        dbx.users_get_current_account()
    except AuthError:
        return "Invalid access token; try re-generating an access token from the app console on the web."

    try:
        dbx.files_upload(file.read(), file_path)
    except Exception as e:
        return str(e)

    shared_link_metadata = dbx.sharing_create_shared_link_with_settings(file_path)
    url = shared_link_metadata.url
    # Convert Dropbox link to direct download link
    dl_url = url.replace("?dl=0", "?dl=1")

    return dl_url
