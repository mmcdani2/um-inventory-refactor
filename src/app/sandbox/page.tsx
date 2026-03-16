import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function SandboxPage() {
    return (
        <div className="p-8 space-y-8 bg-background min-h-screen text-foreground">

            <h1 className="text-3xl font-semibold">UI Sandbox</h1>

            {/* Buttons */}
            <Card>
                <CardHeader>
                    <CardTitle>Buttons</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                </CardContent>
            </Card>

            {/* Inputs */}
            <Card>
                <CardHeader>
                    <CardTitle>Inputs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 max-w-sm">
                    <Input placeholder="Search inventory..." />
                    <Input placeholder="Scan barcode..." />
                </CardContent>
            </Card>

            {/* Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Inventory Table</CardTitle>
                </CardHeader>
                <CardContent>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Qty</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow>
                                <TableCell>1/2 Copper Coupling</TableCell>
                                <TableCell>Truck 1</TableCell>
                                <TableCell>32</TableCell>
                                <TableCell>OK</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>3/4 PEX Tee</TableCell>
                                <TableCell>Warehouse</TableCell>
                                <TableCell>4</TableCell>
                                <TableCell className="text-red-500">Low</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Capacitor 45/5</TableCell>
                                <TableCell>Truck 2</TableCell>
                                <TableCell>12</TableCell>
                                <TableCell>OK</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>

                </CardContent>
            </Card>

        </div>
    )
}