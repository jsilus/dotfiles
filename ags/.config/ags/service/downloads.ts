import { dependencies, sh } from "lib/utils"

const addUri = (uri) => { sh(`aria2rpc addUri "${uri}" | cut -d'"' -f 2`) }

const DownloadItem = (uri) => {
    const gid = sh(`aria2rpc addUri "${uri}" | cut -d'"' -f 2`)
    const info = JSON.parse(sh(`aria2rpc getFiles ${gid} | sed "s/=>/: /g"`))[0]

    return gid
}

class Downloads extends Service {
    static {
        Service.register(this, {}, {
            "available": ["bool", "r"],
            "downloads": ["object", "r"],
        })
    }

    #available = dependencies("aria2c", "aria2rcp")
    #downloadItems = []
    #downloads = []

    addUri(uri) => {
        const gid = sh(`aria2rpc addUri "${uri}" | cut -d'"' -f 2`)
        #downloadItems.push(gid)
    }

    #getInfo(gid) => {
        const info = JSON.parse(sh(`aria2rpc tellStatus ${gid} | sed "/=>/: /g"`))
        return {
            gid: info.gid,
            completedLength: info.completedLength,
            totalLength: info.totalLength,
            downloadSpeed: info.downloadSpeed,
            fileName: sh(`basename "${info.files[0].path}"`),
            uri: info.files[0].uris[0].uri,
        }
    }

    #updateInfo() => {
        #downloads = #downloadItems.map(this.#getInfo)
    }

    constructor() {
        super()

        if (this.#available) {
            Utils.interval(1000, () => { this.#updateInfo })
        }
    }
}

export default new Downloads
